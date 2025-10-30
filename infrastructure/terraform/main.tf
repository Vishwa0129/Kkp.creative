# Terraform Configuration for KKP IT Solutions Infrastructure

# Provider configuration
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.20"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "~> 2.10"
    }
  }
  
  backend "s3" {
    bucket = "kkp-terraform-state"
    key    = "kkp-infrastructure/terraform.tfstate"
    region = "us-east-1"
  }
}

# AWS Provider
provider "aws" {
  region = var.aws_region
  
  default_tags {
    tags = {
      Project     = "KKP IT Solutions"
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}

# Variables
variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "domain_name" {
  description = "Domain name for the application"
  type        = string
  default     = "kkpitsolutions.com"
}

variable "certificate_arn" {
  description = "SSL certificate ARN"
  type        = string
}

# VPC Configuration
resource "aws_vpc" "kkp_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "kkp-vpc"
  }
}

# Internet Gateway
resource "aws_internet_gateway" "kkp_igw" {
  vpc_id = aws_vpc.kkp_vpc.id

  tags = {
    Name = "kkp-igw"
  }
}

# Public Subnets
resource "aws_subnet" "kkp_public_subnets" {
  count = 2

  vpc_id                  = aws_vpc.kkp_vpc.id
  cidr_block              = "10.0.${count.index + 1}.0/24"
  availability_zone       = data.aws_availability_zones.available.names[count.index]
  map_public_ip_on_launch = true

  tags = {
    Name = "kkp-public-subnet-${count.index + 1}"
    Type = "Public"
  }
}

# Private Subnets
resource "aws_subnet" "kkp_private_subnets" {
  count = 2

  vpc_id            = aws_vpc.kkp_vpc.id
  cidr_block        = "10.0.${count.index + 10}.0/24"
  availability_zone = data.aws_availability_zones.available.names[count.index]

  tags = {
    Name = "kkp-private-subnet-${count.index + 1}"
    Type = "Private"
  }
}

# Database Subnets
resource "aws_subnet" "kkp_db_subnets" {
  count = 2

  vpc_id            = aws_vpc.kkp_vpc.id
  cidr_block        = "10.0.${count.index + 20}.0/24"
  availability_zone = data.aws_availability_zones.available.names[count.index]

  tags = {
    Name = "kkp-db-subnet-${count.index + 1}"
    Type = "Database"
  }
}

# Route Tables
resource "aws_route_table" "kkp_public_rt" {
  vpc_id = aws_vpc.kkp_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.kkp_igw.id
  }

  tags = {
    Name = "kkp-public-rt"
  }
}

resource "aws_route_table" "kkp_private_rt" {
  vpc_id = aws_vpc.kkp_vpc.id

  tags = {
    Name = "kkp-private-rt"
  }
}

# Route Table Associations
resource "aws_route_table_association" "kkp_public_rta" {
  count = length(aws_subnet.kkp_public_subnets)

  subnet_id      = aws_subnet.kkp_public_subnets[count.index].id
  route_table_id = aws_route_table.kkp_public_rt.id
}

resource "aws_route_table_association" "kkp_private_rta" {
  count = length(aws_subnet.kkp_private_subnets)

  subnet_id      = aws_subnet.kkp_private_subnets[count.index].id
  route_table_id = aws_route_table.kkp_private_rt.id
}

# Security Groups
resource "aws_security_group" "kkp_web_sg" {
  name_prefix = "kkp-web-sg"
  vpc_id      = aws_vpc.kkp_vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "kkp-web-sg"
  }
}

resource "aws_security_group" "kkp_app_sg" {
  name_prefix = "kkp-app-sg"
  vpc_id      = aws_vpc.kkp_vpc.id

  ingress {
    from_port       = 3000
    to_port         = 3000
    protocol        = "tcp"
    security_groups = [aws_security_group.kkp_web_sg.id]
  }

  ingress {
    from_port       = 5000
    to_port         = 5000
    protocol        = "tcp"
    security_groups = [aws_security_group.kkp_web_sg.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "kkp-app-sg"
  }
}

resource "aws_security_group" "kkp_db_sg" {
  name_prefix = "kkp-db-sg"
  vpc_id      = aws_vpc.kkp_vpc.id

  ingress {
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [aws_security_group.kkp_app_sg.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "kkp-db-sg"
  }
}

# Application Load Balancer
resource "aws_lb" "kkp_alb" {
  name               = "kkp-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.kkp_web_sg.id]
  subnets            = aws_subnet.kkp_public_subnets[*].id

  enable_deletion_protection = false

  tags = {
    Name = "kkp-alb"
  }
}

# Target Groups
resource "aws_lb_target_group" "kkp_frontend_tg" {
  name     = "kkp-frontend-tg"
  port     = 3000
  protocol = "HTTP"
  vpc_id   = aws_vpc.kkp_vpc.id

  health_check {
    enabled             = true
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 5
    interval            = 30
    path                = "/"
    matcher             = "200"
    port                = "traffic-port"
    protocol            = "HTTP"
  }

  tags = {
    Name = "kkp-frontend-tg"
  }
}

resource "aws_lb_target_group" "kkp_api_tg" {
  name     = "kkp-api-tg"
  port     = 5000
  protocol = "HTTP"
  vpc_id   = aws_vpc.kkp_vpc.id

  health_check {
    enabled             = true
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 5
    interval            = 30
    path                = "/health"
    matcher             = "200"
    port                = "traffic-port"
    protocol            = "HTTP"
  }

  tags = {
    Name = "kkp-api-tg"
  }
}

# Load Balancer Listeners
resource "aws_lb_listener" "kkp_http_listener" {
  load_balancer_arn = aws_lb.kkp_alb.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type = "redirect"

    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

resource "aws_lb_listener" "kkp_https_listener" {
  load_balancer_arn = aws_lb.kkp_alb.arn
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-TLS-1-2-2017-01"
  certificate_arn   = var.certificate_arn

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.kkp_frontend_tg.arn
  }
}

# Load Balancer Listener Rules
resource "aws_lb_listener_rule" "kkp_api_rule" {
  listener_arn = aws_lb_listener.kkp_https_listener.arn
  priority     = 100

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.kkp_api_tg.arn
  }

  condition {
    path_pattern {
      values = ["/api/*"]
    }
  }
}

# RDS Database
resource "aws_db_subnet_group" "kkp_db_subnet_group" {
  name       = "kkp-db-subnet-group"
  subnet_ids = aws_subnet.kkp_db_subnets[*].id

  tags = {
    Name = "kkp-db-subnet-group"
  }
}

resource "aws_db_instance" "kkp_database" {
  identifier = "kkp-database"

  engine         = "postgres"
  engine_version = "15.4"
  instance_class = "db.t3.micro"

  allocated_storage     = 20
  max_allocated_storage = 100
  storage_type          = "gp2"
  storage_encrypted     = true

  db_name  = "kkpdb"
  username = "kkpadmin"
  password = "kkpadmin123" # In production, use AWS Secrets Manager

  vpc_security_group_ids = [aws_security_group.kkp_db_sg.id]
  db_subnet_group_name   = aws_db_subnet_group.kkp_db_subnet_group.name

  backup_retention_period = 7
  backup_window          = "03:00-04:00"
  maintenance_window     = "sun:04:00-sun:05:00"

  skip_final_snapshot = true
  deletion_protection = false

  tags = {
    Name = "kkp-database"
  }
}

# ElastiCache Redis
resource "aws_elasticache_subnet_group" "kkp_redis_subnet_group" {
  name       = "kkp-redis-subnet-group"
  subnet_ids = aws_subnet.kkp_private_subnets[*].id
}

resource "aws_elasticache_replication_group" "kkp_redis" {
  replication_group_id       = "kkp-redis"
  description                = "Redis cluster for KKP IT Solutions"

  node_type            = "cache.t3.micro"
  port                 = 6379
  parameter_group_name = "default.redis7"

  num_cache_clusters = 2

  subnet_group_name  = aws_elasticache_subnet_group.kkp_redis_subnet_group.name
  security_group_ids = [aws_security_group.kkp_redis_sg.id]

  at_rest_encryption_enabled = true
  transit_encryption_enabled = true

  tags = {
    Name = "kkp-redis"
  }
}

resource "aws_security_group" "kkp_redis_sg" {
  name_prefix = "kkp-redis-sg"
  vpc_id      = aws_vpc.kkp_vpc.id

  ingress {
    from_port       = 6379
    to_port         = 6379
    protocol        = "tcp"
    security_groups = [aws_security_group.kkp_app_sg.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "kkp-redis-sg"
  }
}

# S3 Bucket for static assets
resource "aws_s3_bucket" "kkp_static_assets" {
  bucket = "kkp-static-assets-${random_id.bucket_suffix.hex}"

  tags = {
    Name = "kkp-static-assets"
  }
}

resource "random_id" "bucket_suffix" {
  byte_length = 4
}

resource "aws_s3_bucket_versioning" "kkp_static_assets_versioning" {
  bucket = aws_s3_bucket.kkp_static_assets.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "kkp_static_assets_encryption" {
  bucket = aws_s3_bucket.kkp_static_assets.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "kkp_static_assets_pab" {
  bucket = aws_s3_bucket.kkp_static_assets.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# CloudFront Distribution
resource "aws_cloudfront_distribution" "kkp_distribution" {
  origin {
    domain_name = aws_lb.kkp_alb.dns_name
    origin_id   = "kkp-alb-origin"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "kkp-alb-origin"
    compress               = true
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = true
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 3600
    max_ttl     = 86400
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = var.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  tags = {
    Name = "kkp-cloudfront-distribution"
  }
}

# Route 53 Hosted Zone
resource "aws_route53_zone" "kkp_zone" {
  name = var.domain_name

  tags = {
    Name = "kkp-zone"
  }
}

# Route 53 Records
resource "aws_route53_record" "kkp_apex" {
  zone_id = aws_route53_zone.kkp_zone.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.kkp_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.kkp_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "kkp_www" {
  zone_id = aws_route53_zone.kkp_zone.zone_id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.kkp_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.kkp_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

# Outputs
output "vpc_id" {
  description = "VPC ID"
  value       = aws_vpc.kkp_vpc.id
}

output "alb_dns_name" {
  description = "Application Load Balancer DNS name"
  value       = aws_lb.kkp_alb.dns_name
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.kkp_distribution.domain_name
}

output "database_endpoint" {
  description = "RDS database endpoint"
  value       = aws_db_instance.kkp_database.endpoint
}

output "redis_endpoint" {
  description = "ElastiCache Redis endpoint"
  value       = aws_elasticache_replication_group.kkp_redis.primary_endpoint_address
}

output "s3_bucket_name" {
  description = "S3 bucket name for static assets"
  value       = aws_s3_bucket.kkp_static_assets.bucket
}

# Data sources
data "aws_availability_zones" "available" {
  state = "available"
}

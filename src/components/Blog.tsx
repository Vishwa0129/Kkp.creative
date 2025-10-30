import React from 'react'
import { Calendar, User, ArrowRight, Clock, TrendingUp } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useAnimations'

const Blog: React.FC = () => {
  const [blogRef, isBlogVisible] = useScrollAnimation(0.1)

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Digital Marketing: Trends to Watch in 2024",
      excerpt: "Explore how artificial intelligence is revolutionizing digital marketing strategies and what businesses need to know to stay competitive.",
      author: "Vishwa Teja",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/images/blog/ai-marketing.jpg",
      featured: true
    },
    {
      id: 2,
      title: "PowerBI Dashboard Best Practices: Turning Data into Business Insights",
      excerpt: "Learn how to create effective PowerBI dashboards that drive decision-making and improve business performance.",
      author: "Pranavi",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Data Analytics",
      image: "/images/blog/powerbi-guide.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Social Media Marketing Strategies That Actually Work in 2024",
      excerpt: "Discover proven social media strategies that help businesses build authentic connections and drive engagement.",
      author: "Vishwa Teja",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Social Media",
      image: "/images/blog/social-media.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Website Performance Optimization: Speed Up Your Site for Better SEO",
      excerpt: "Learn essential techniques to improve your website's loading speed and boost your search engine rankings.",
      author: "Pranavi",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "Web Development",
      image: "/images/blog/website-optimization.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Mobile App Development: Native vs Cross-Platform Solutions",
      excerpt: "Compare native and cross-platform mobile app development approaches to choose the best solution for your business.",
      author: "Vishwa Teja",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "Mobile Development",
      image: "/images/blog/mobile-app.jpg",
      featured: false
    },
    {
      id: 6,
      title: "SEO Content Strategy: How to Create Content That Ranks",
      excerpt: "Master the art of creating SEO-friendly content that not only ranks well but also provides value to your audience.",
      author: "Pranavi",
      date: "2023-12-25",
      readTime: "6 min read",
      category: "SEO & Content",
      image: "/images/blog/seo-content.jpg",
      featured: false
    }
  ]

  const categories = [
    { name: "All", count: 6 },
    { name: "AI & Technology", count: 1 },
    { name: "Data Analytics", count: 1 },
    { name: "Social Media", count: 1 },
    { name: "Web Development", count: 1 },
    { name: "Mobile Development", count: 1 },
    { name: "SEO & Content", count: 1 }
  ]

  return (
    <section 
      ref={blogRef}
      className={`py-20 bg-gradient-to-br from-gray-50 to-indigo-50 transition-all duration-1000 ${
        isBlogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-4 transition-all duration-700 delay-200 ${
            isBlogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <TrendingUp className="h-4 w-4 text-indigo-600 mr-2" />
            <span className="text-sm font-semibold text-indigo-700">Latest Insights</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-300 ${
            isBlogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Knowledge Hub & Insights
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${
            isBlogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Stay updated with the latest trends, insights, and best practices in digital marketing, 
            web development, and AI technology from our expert team.
          </p>
        </div>

        {/* Featured Post */}
        <div className={`mb-16 transition-all duration-700 delay-500 ${
          isBlogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                    <div className="text-center text-indigo-600">
                      <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold">{post.title.charAt(0)}</span>
                      </div>
                      <span className="text-sm font-medium">Featured Article</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold mr-3">
                      Featured
                    </span>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-2" />
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="group inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <article
              key={post.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isBlogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              } ${index === 0 ? 'transition-delay-100' : index === 1 ? 'transition-delay-200' : 'transition-delay-300'}`}
            >
              <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                <div className="text-center text-indigo-600">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold">{post.title.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-medium">Article Preview</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-semibold">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <button className="group inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className={`mt-16 text-center transition-all duration-700 delay-600 ${
          isBlogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Insights</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest articles, tips, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-indigo-200 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog

import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '../data/blog-posts.js'
import ContactBand from '../components/ContactBand.jsx'
import Signature from '../components/Signature.jsx'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Blog() {
  return (
    <>
      <section className="jt-section">
        <div className="jt-page__wrap">
          <span className="jt-eyebrow jt-eyebrow--wide jt-page__kicker">Notre expertise</span>
          <h1 className="jt-page-title" style={{ maxWidth: '20ch' }}>Ce qu'on a appris, écrit noir sur blanc.</h1>
          <p className="jt-page__lede">
            Guides pratiques, analyses de coûts et retours d'expérience sur le développement web, mobile et la transformation digitale au Sénégal.
          </p>
        </div>
      </section>

      <section className="jt-section">
        <div className="jt-section__wrap" style={{ paddingBlock: 'clamp(24px,3vw,40px)' }}>
          <div className="jt-bloglist" itemScope itemType="https://schema.org/Blog">
            <meta itemProp="name" content="Blog Jëftech" />
            <meta itemProp="url" content="https://jeftech.dev/blog" />
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="jt-blogrow"
                itemProp="blogPost"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <span className="jt-blogrow__main">
                  <span className="jt-blogrow__meta">
                    <span className="jt-blogrow__cat" itemProp="articleSection">{post.category}</span>
                    <time dateTime={post.date} itemProp="datePublished">{formatDate(post.date)}</time>
                    <span>{post.readTime}</span>
                    {post.featured && <span className="jt-blogrow__badge">· À la une</span>}
                  </span>
                  <span className="jt-blogrow__title" itemProp="headline">{post.title}</span>
                  <span className="jt-blogrow__excerpt" itemProp="description">{post.description}</span>
                </span>
                <span className="jt-blogrow__arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Signature />
      <ContactBand />
    </>
  )
}

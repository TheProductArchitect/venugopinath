import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonicalUrl: string;
    keywords?: string;
    image?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonicalUrl,
    keywords,
    image = 'https://venugopinath.me/venu.png'
}) => {
    return (
        <Helmet>
            {/* Basic HTML Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Strict Canonical Link */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Venu Gopinath",
                    "alternateName": [
                        "Venu Nukavarapu",
                        "Venu Gopinath Nukavarapu",
                        "The Product Architect"
                    ],
                    "jobTitle": "Head of Product, Senior Product Manager & AI Strategist",
                    "url": "https://venugopinath.me",
                    "image": image,
                    "sameAs": [
                        "https://linkedin.com/in/venugopinath",
                        "https://github.com/TheProductArchitect"
                    ],
                    "alumniOf": [
                        {
                            "@type": "CollegeOrUniversity",
                            "name": "University of Cambridge",
                            "sameAs": "https://en.wikipedia.org/wiki/University_of_Cambridge"
                        },
                        {
                            "@type": "CollegeOrUniversity",
                            "name": "Arizona State University",
                            "sameAs": "https://en.wikipedia.org/wiki/Arizona_State_University"
                        }
                    ],
                    "worksFor": [
                        {
                            "@type": "Organization",
                            "name": "Google",
                            "sameAs": "https://en.wikipedia.org/wiki/Google"
                        },
                        {
                            "@type": "Organization",
                            "name": "ZoFit",
                            "sameAs": "https://zofit.ai"
                        }
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;

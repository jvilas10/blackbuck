import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {serviceDetails} from '../data'

const siteUrl='https://blackbuckstudios.com'
const defaultTitle='BlackBuck Studios | Branding & Digital Marketing Agency in Pune'
const defaultDescription='BlackBuck Studios is a strategy-led branding, design and digital marketing agency in Pune helping growing brands build clarity, consistency and measurable growth.'
const pageMeta={
  '/':{title:defaultTitle,description:defaultDescription},
  '/about':{title:'About BlackBuck Studios | Branding Agency in Pune',description:'Learn how BlackBuck Studios uses strategy, branding, packaging, digital marketing and content to build stronger brands in Pune and across India.'},
  '/services':{title:'Branding & Digital Marketing Services | BlackBuck Studios',description:'Explore Brand Strategy, Brand Experience Design, Packaging Design, Visibility & Marketing, Digital Presence, Influencer Marketing, Content & Production, Website Development, Digital Marketing and Exhibition Space Design.'},
  '/case-studies':{title:'Branding & Packaging Case Studies | BlackBuck Studios',description:'View BlackBuck Studios case studies across brand identity, packaging, marketing, websites, content and digital campaigns.'},
  '/blogs':{title:'Brand Strategy & Marketing Insights | BlackBuck Studios',description:'Practical insights on brand strategy, identity, packaging, digital marketing and content for growing businesses.'},
  '/career':{title:'Careers at BlackBuck Studios | Pune Creative Agency',description:'Explore career opportunities with BlackBuck Studios, a strategy-led branding and digital marketing agency in Pune.'},
  '/contact':{title:'Contact BlackBuck Studios | Start a Brand Project',description:'Contact BlackBuck Studios in Pune for brand strategy, packaging design, websites, digital marketing, content and creative projects.'}
}
const caseStudyNames={
  '/benifizz':'Benifizz Branding & Packaging Case Study | BlackBuck Studios',
  '/balaji-bakery':'Balaji Bakery Rebranding & Packaging Case Study | BlackBuck Studios',
  '/aarogyavel-oil':'Aarogyavel Oil Branding Case Study | BlackBuck Studios',
  '/vardhaman':'Vardhaman Bakery Branding Case Study | BlackBuck Studios',
  '/be-testee':'Be Testee Branding Case Study | BlackBuck Studios',
  '/bliss-bite':'Bliss Bite Beverage Branding Case Study | BlackBuck Studios'
}
export function SEO(){
  const {pathname}=useLocation()
  useEffect(()=>{
    const meta=pageMeta[pathname]||{title:caseStudyNames[pathname]||defaultTitle,description:caseStudyNames[pathname]?'Explore the branding, packaging, marketing and digital work created by BlackBuck Studios for this client.':defaultDescription}
    const canonical=siteUrl+(pathname==='/'?'':pathname.replace(/\/$/,''))
    document.title=meta.title
    const setMeta=(selector,attrs)=>{
      let node=document.head.querySelector(selector)
      if(!node){node=document.createElement('meta');document.head.appendChild(node)}
      Object.entries(attrs).forEach(([key,value])=>node.setAttribute(key,value))
    }
    setMeta('meta[name="description"]',{name:'description',content:meta.description})
    setMeta('meta[name="robots"]',{name:'robots',content:'index,follow,max-image-preview:large'})
    setMeta('meta[property="og:title"]',{property:'og:title',content:meta.title})
    setMeta('meta[property="og:description"]',{property:'og:description',content:meta.description})
    setMeta('meta[property="og:type"]',{property:'og:type',content:'website'})
    setMeta('meta[property="og:url"]',{property:'og:url',content:canonical})
    setMeta('meta[property="og:site_name"]',{property:'og:site_name',content:'BlackBuck Studios'})
    setMeta('meta[property="og:image"]',{property:'og:image',content:'https://blackbuckstudios.com/wp-content/uploads/2025/10/BlackBuck-Final-Logo.pdf-6-e1772700590873-1024x364.png'})
    setMeta('meta[name="twitter:card"]',{name:'twitter:card',content:'summary_large_image'})
    setMeta('meta[name="twitter:title"]',{name:'twitter:title',content:meta.title})
    setMeta('meta[name="twitter:description"]',{name:'twitter:description',content:meta.description})
    let link=document.head.querySelector('link[rel="canonical"]')
    if(!link){link=document.createElement('link');link.rel='canonical';document.head.appendChild(link)}
    link.href=canonical
    const schemas=[{
      '@context':'https://schema.org',
      '@type':'ProfessionalService',
      name:'BlackBuck Studios',
      url:siteUrl,
      logo:'https://blackbuckstudios.com/wp-content/uploads/2025/10/BlackBuck-Final-Logo.pdf-6-e1772700590873-1024x364.png',
      description:defaultDescription,
      email:'info@blackbuckstudios.com',
      telephone:'+91 9604079625',
      address:{'@type':'PostalAddress',streetAddress:'Flat No-13, 2nd Floor, Laksmi Kunj Apartment, Sai Nagari, Chandan Nagar, Pune - Nagar Rd, near Mahanagar Co-Op Bank',addressLocality:'Kharadi, Pune',addressRegion:'Maharashtra',postalCode:'411014',addressCountry:'IN'},
      areaServed:'India',
      sameAs:['https://www.instagram.com/blackbuckstudios/','https://www.linkedin.com/company/black-buck-design']
    }]
    if(pathname==='/services'){
      schemas.push({'@context':'https://schema.org','@type':'ItemList',name:'BlackBuck Studios services',itemListElement:serviceDetails.map((service,index)=>({'@type':'ListItem',position:index+1,item:{'@type':'Service',name:service.title,description:service.intro,provider:{'@type':'Organization',name:'BlackBuck Studios',url:siteUrl}}}))})
    }
    let script=document.head.querySelector('script[data-seo-schema]')
    if(!script){script=document.createElement('script');script.type='application/ld+json';script.dataset.seoSchema='true';document.head.appendChild(script)}
    script.textContent=JSON.stringify(schemas)
  },[pathname])
  return null
}
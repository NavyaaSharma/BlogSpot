const withCSS=require('@zeit/next-css')

module.exports=withCSS({
    publicRuntimeConfig:
    {
        APP_NAME:"BLOGSPOT",
        API_DEV:"http://localhost:3000/api",
        PRODUCTION:false,
        DOMAIN_DEVELOPMENT:'http://localhost:3000',
        FB_APP_ID:'',
        DISQUS_SHORTNAME:'blogspot-4',
        SENDGRID_API_KEY:'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'
    }
})  
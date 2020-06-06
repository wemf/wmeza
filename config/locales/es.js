module.exports = {
  tHome: 'Inicio',
  tRelativePosts: 'Entradas relacionadas',
  tTags: 'Etiquetada',
  tIndTitle: 'Todas las entradas',
  taIndKeywords: [`blog`, `gatsby`, `javascript`, `react`],
  tfIndCountPosts: (count) => `${count} entrada${count === 1 ? '' : 's'}`,
  tfTagHeader: (totalCount, tag) =>
    `${totalCount} entrada${totalCount === 1 ? '' : 's'} etiquetada con "${tag}"`,
  tLatestPosts: 'Últimas entradas',
  tPortfolio: 'Portafolio',
  tMenuAboutMe: 'Sobre mi',
  tMenuContact: 'Contacto',
  tBannerTitleHome: 'Hola, soy william',
  tBannerTitleHomeDesc: 'Desarrollo proyectos para la web. Los retos son mi pasion',
  tNewsletter: 'Boletín',
  tBannerNewsletter: 'Obten actualizaciones de mi contenido, sin spam, sin pagar, solo código.',
  tNewsletterSucces: '¡Gracias por suscribirte!',
  tNewsletterError: ', tal vez ya estés suscrito',
  tNewsletterDescription: `Si te gusta mi blog y deseas actualizarte con mis últimos artículos, suscríbete, 
  prometo nunca enviarte spam`,
  tNewsletterDescription2: '. Publicaría al menos 1 publicación por mes.',
  tNewsletterBtn: 'Suscribirse',
  tInputEmail: 'Tu correo electrónico',
  tOpenSourceProjects: 'Proyectos código abierto',
  tFreelancerProjects: 'Proyectos en Freelancer',
};

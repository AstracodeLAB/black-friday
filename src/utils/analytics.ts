// analytics.ts
export const loadAnalytics = () => {
  if (!window.gtag) {
    // Cargar el script de GA
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=TU_ID_DE_GA`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'TU_ID_DE_GA');
  }
};

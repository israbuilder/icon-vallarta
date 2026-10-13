const DEFAULT_PAGE_TYPE = 'unknown';

function getGtag() {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
        return null;
    }
    return window.gtag;
}

function getUrlAttribution() {
    if (typeof window === 'undefined') {
        return {};
    }
    const params = new URLSearchParams(window.location.search);
    return {
        utm_source: params.get('utm_source') || undefined,
        utm_medium: params.get('utm_medium') || undefined,
        utm_campaign: params.get('utm_campaign') || undefined,
        utm_term: params.get('utm_term') || undefined,
        utm_content: params.get('utm_content') || undefined,
        gclid: params.get('gclid') || undefined,
        fbclid: params.get('fbclid') || undefined,
    };
}

function getPageMetadata() {
    if (typeof document === 'undefined') {
        return {};
    }
    const body = document.body;
    return {
        page_path: window.location.pathname,
        page_location: window.location.href,
        page_title: document.title,
        page_type: body?.dataset?.pageType || DEFAULT_PAGE_TYPE,
        service: body?.dataset?.service || undefined,
        location: body?.dataset?.location || undefined,
    };
}

function cleanParameters(parameters) {
    return Object.fromEntries(
        Object.entries(parameters).filter(([, value]) => {
            return value !== undefined && value !== null && value !== '';
        })
    );
}

export function trackEvent(eventName, parameters = {}) {
    const gtag = getGtag();
    if (!gtag) {
        if (import.meta.env.DEV) {
            console.log(`[analytics mock] ${eventName}`, parameters);
        }
        return;
    }
    const payload = cleanParameters({
        ...getPageMetadata(),
        ...getUrlAttribution(),
        ...parameters,
    });
    gtag('event', eventName, payload);
}

export function trackPhoneClick({ phoneNumber, placement = 'unknown', service, location } = {}) {
    trackEvent('phone_click', { phone_number: phoneNumber, placement, service, location });
}

export function trackScheduleClick({ placement = 'unknown', service, location, linkUrl } = {}) {
    trackEvent('schedule_click', { placement, service, location, link_url: linkUrl });
}

export function trackFormSubmit({ formName, service, location, leadId } = {}) {
    trackEvent('form_submit', { form_name: formName, service, location, lead_id: leadId });
}

export function initAnalytics() {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
    }
    document.addEventListener('click', (event) => {
        const target = event.target instanceof Element ? event.target : null;
        if (!target) return;
        const phoneLink = target.closest('a[href^="tel:"]');
        if (phoneLink) {
            trackPhoneClick({
                phoneNumber: phoneLink.getAttribute('href')?.replace('tel:', ''),
                placement: phoneLink.dataset.placement || 'unknown',
            });
            return;
        }
    });
}

if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnalytics, { once: true });
    } else {
        initAnalytics();
    }
}

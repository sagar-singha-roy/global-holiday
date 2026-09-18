// Dynamic Package API Client for User Portal
import { useState, useEffect } from 'react';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/v1/api';

/**
 * Format MongoDB package item to match frontend props
 */
export const formatBackendPackage = (pkg) => {
  const itinerarySummary =
    typeof pkg.itinerary === 'string'
      ? pkg.itinerary
      : Array.isArray(pkg.itinerary) && pkg.itinerary.length > 0
      ? pkg.itinerary
          .map((it) =>
            typeof it === 'string'
              ? it
              : it.title
              ? it.title.split('—')[0].split('→')[0].trim()
              : it.day || ''
          )
          .filter(Boolean)
          .slice(0, 5)
          .join(' • ')
      : pkg.destination || '';

  return {
    id: pkg.slug || pkg._id,
    slug: pkg.slug,
    title: pkg.title,
    duration: pkg.duration,
    dest: pkg.destination,
    destination: pkg.destination,
    price: pkg.price || 'Tariff on Request',
    rating: pkg.rating || '5.0 ★★★★★',
    category:
      pkg.category === 'international'
        ? 'international'
        : (pkg.destination || '').toLowerCase().includes('meghalaya') ||
          (pkg.destination || '').toLowerCase().includes('sikkim') ||
          (pkg.destination || '').toLowerCase().includes('aizawl') ||
          (pkg.destination || '').toLowerCase().includes('tripura')
        ? 'northeast'
        : 'pan-india',
    img: pkg.heroImg || '/images/hero-bg.jpg',
    heroImg: pkg.heroImg || '/images/hero-bg.jpg',
    overview: pkg.overview,
    itinerary: itinerarySummary,
    itineraryList: Array.isArray(pkg.itinerary) ? pkg.itinerary : [],
    inclusions: pkg.inclusions || [],
    exclusions: pkg.exclusions || [],
    highlights:
      Array.isArray(pkg.itinerary) && pkg.itinerary.length > 0
        ? pkg.itinerary
            .slice(0, 3)
            .map((it) =>
              typeof it === 'string'
                ? it
                : it.title
                ? it.title.split('—')[0].split('→')[0].trim()
                : ''
            )
            .filter(Boolean)
        : [pkg.destination || 'Sightseeing'],
  };
};


/**
 * Fetch packages dynamically from backend MongoDB API
 */
export async function fetchPackagesFromBackend() {
  try {
    const res = await fetch(`${API_BASE_URL}/packages`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    if (json.success && Array.isArray(json.data)) {
      return json.data.map(formatBackendPackage);
    }
  } catch (err) {
    console.warn('[User Portal] Backend fetch error:', err.message);
  }
  return null;
}

/**
 * Custom hook to dynamically load packages from backend
 */
export function useBackendPackages(fallbackPackages = []) {
  const [packages, setPackages] = useState(fallbackPackages);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      const data = await fetchPackagesFromBackend();
      if (isMounted && data && data.length > 0) {
        setPackages(data);
      }
      if (isMounted) setLoading(false);
    }

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  return { packages, loading };
}

'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useLoadScript } from '@react-google-maps/api'
import Logo from './Logo'

const Footer = () => {
  const mapRef = useRef(null)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '', // fallback to empty string
  })

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -25.6657, lng: 27.2415 },
        zoom: 15,
      })

      new window.google.maps.Marker({
        position: { lat: 40.7128, lng: -74.0060 },
        map: map,
        title: "Our Store Location"
      })
    }
  }, [isLoaded])

  return (
    <footer className="bg-bgLight py-10 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Interactive Map */}
          <div className="flex justify-center">
            <div ref={mapRef} className="w-full h-[200px] rounded-lg" />
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-xl font-semibold text-primary mb-2">Contact Us</h3>
            <div className="flex items-center gap-2">
              <MapPin className="text-primary w-5 h-5" />
              <span>123 South St, South Africa, Rustenburg</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-primary w-5 h-5" />
              <span>+27 (123) 456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-primary w-5 h-5" />
              <span>support@ecommerce.com</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ebenezer Pharmacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

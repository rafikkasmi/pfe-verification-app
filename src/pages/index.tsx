import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from "react";
import { QrScanner } from '@yudiel/react-qr-scanner';
import Navbar from '@/components/organ/Navbar';
import Landing from '@/components/home/Landing';
import ScanQR from '@/components/home/ScanQR';
import FileUpload from '@/components/home/FileUpload';
export default function Home () {
  const [data, setData] = useState('No result');

  return (
    <div>
      <Navbar />
      <Landing />
      <ScanQR />
      <FileUpload />
    </div>
  );
};




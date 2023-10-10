import { enumLandStatus } from "@prisma/client";

export interface landData {
  name: string;
  size: string;
  fullPrice: number;
  initialDeposit: number;
  location: string;
  area: string;
  features: string;
  categoryId: number;
  longitude: number;
  latitude: number;
  inspectScheduleDay: Date;
  inspectScheduleTime: string;
  rentPerAnnum: number;
  images: PhotoData;
  documents: PhotoData;
}

export interface PhotoData {
  name: string;
  fileId: number;
}

export interface updateLandData {
  name: string;
  size: string;
  fullPrice: number;
  initialDeposit: number;
  location: string;
  area: string;
  features: string;
  longitude: number;
  latitude: number;
  inspectScheduleDay: Date;
  inspectScheduleTime: string;
  rentPerAnnum: number;
  images: PhotoData;
  documents: PhotoData;
}

export interface LandFilterData {
  status: enumLandStatus;
  boosted: boolean;
}

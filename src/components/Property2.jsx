import Link from 'next/link'
import Image from 'next/image'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'
import defaultImage from '../assets/images/homePhoto.jpg'
import 'twin.macro'

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link tw=" " href={`/property/${externalID}`} passHref>
    {/* //card */}
    <div tw="grid-cols-3 pt-2 cursor-pointer">
      {/* //car Image */}
      <div>
        <div tw="w-[380px] p-5 h-[300px] relative">
          <Image
            fill
            src={coverPhoto ? coverPhoto.url : defaultImage}
            alt="house"
          />
        </div>
      </div>
      <div tw="w-full">
        <div tw="flex pt-2 items-center justify-between">
          {/* //prpperty price/frequency */}
          <div tw="flex items-center">
            <div tw="pr-3 text-green-400 ">{isVerified && <GoVerified />} </div>
            <div tw="font-bold text-lg">
              AED {millify(price)}
              {rentFrequency && `/${rentFrequency}`}{' '}
            </div>
          </div>
          {/* // property agency logo */}
          <div tw="relative flex items-center justify-center w-16 h-12 rounded-full select-none">
            <Image
              src={agency?.logo?.url}
              alt="agency"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        {/* // property specs */}
        <div tw="flex items-center justify-around w-[250px] text-blue-400">
          | {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{' '}
          <BsGridFill />
        </div>
        {/* //property description */}
        <div tw="text-[1rem]">
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </div>
      </div>
    </div>{' '}
  </Link>
)
export default Property

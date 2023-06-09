import Link from 'next/link'
import Image from 'next/image'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'
import defaultImage from '../assets/images/homePhoto.jpg'
import tw from 'twin.macro'

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
  <Link href={`/property/${externalID}`} passHref>
    <div tw="flex-wrap relative w-[400px] h-[320px] p-5 pt-0 justify-start cursor-pointer">
      <div tw="">
        <Image
          fill
          src={coverPhoto ? coverPhoto.url : defaultImage}
          alt="house"
        />
      </div>
      <div tw="w-full">
        <div tw="flex pt-2 items-center justify-between">
          <div tw="flex items-center">
            <div tw="pr-3 text-green-400 ">{isVerified && <GoVerified />} </div>
            <div tw="font-bold text-lg">
              AED {millify(price)}
              {rentFrequency && `/${rentFrequency}`}{' '}
            </div>
          </div>
          <div>
            <div>
              <Image
                src={agency?.logo?.url}
                alt="agency"
                width={35}
                height={40}
              />
            </div>
          </div>
        </div>
        <div tw="flex items-center p-[1px] justify-between w-[250px] text-blue-400">
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{' '}
          <BsGridFill />
        </div>
        <div tw="text-[1rem]">
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </div>
      </div>
    </div>
  </Link>
)
export default Property

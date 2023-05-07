import { fetchApi, baseUrl } from '../utils/fetchApi'
import Link from 'next/link'
import Image from 'next/image'
import tw from 'twin.macro'
import { Button } from './../components'
import Property from '../components/Property2'

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
  imageUrl,
}) => (
  <div tw="flex flex-wrap justify-center items-center m-2.5">
    <Image
      src={imageUrl}
      width={500}
      height={300}
      priority={false}
      alt="banner"
    />
    <div css={tw`p-5`}>
      <div tw="text-gray-500 text-sm font-medium">{purpose}</div>
      <div tw="text-3xl font-bold">
        {title1}
        <br />
        {title2}
      </div>
      <div tw="text-gray-700 text-lg py-3 font-medium">
        {desc1}
        <br />
        {desc2}
      </div>
      <Button tw="text-xl bg-gray-300 text-gray-600 hocus:(scale-105 text-gray-50 bg-gray-400)">
        <Link href={linkName}>{buttonText} </Link>
      </Button>
    </div>
  </div>
)

export default function Home({ propertiesForRent, propertiesForSale }) {
  //console.log(propertiesForRent, propertiesForSale)
  return (
    <div>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <div tw="flex flex-wrap justify-around ">
        {propertiesForRent.map(property => (
          <Property property={property} key={property.id} />
        ))}
      </div>
      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <div tw="flex flex-wrap justify-around">
        {propertiesForSale.map(property => (
          <Property property={property} key={property.id} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`,
  )
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`,
  )

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  }
}

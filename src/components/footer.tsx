import MaxWidthWrapper from './max-width-wrapper'
import { FooterSectionHeading, fullName, LinkedInIcon, LinkedInProfile } from '@/lib/constants';
import { LetsTalkBtn } from './ui/lets-talk-btn';

const Footer = () => {
    const d = new Date();
  let year = d.getFullYear();
  return (
    <div>
      <MaxWidthWrapper>
        <div className='pt-10'>
          <div className='bg-myPalette9 rounded-3xl flex flex-col justify-center items-center p-10'>
            <p className='text-myPalette1 text-4xl font-bold font-myMainFont'>{FooterSectionHeading}</p>
            <a href="https://wa.me/+92344603782?text=Hello, How can I help you?" target='_blank' className='mt-6'>
              <LetsTalkBtn />
            </a>
          </div>
          <div className='flex flex-row gap-1 justify-center items-center py-4'>
            <p className='text-myPalette9 text-sm font-myMainFont'>@ {year} {fullName}</p>
            <a href={LinkedInProfile} target='_blank'>
              <img
                className='h-5 aspect-square'
                src={LinkedInIcon}
                alt='LinkedIn-Icon'
              />
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Footer
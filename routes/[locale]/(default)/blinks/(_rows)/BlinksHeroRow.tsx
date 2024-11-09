'use client'

import { cn } from '@/lib/utils.ts'
import { ExtendedState } from '@/utils/state.ts'
import Image from '@/islands/ui/Image.tsx'
import {
  lightTextColor,
  mainShardGradation,
} from '@/components/utils/tailwinds.ts'
import { createTranslator } from 'fresh-i18n'
import { asset } from 'fresh/runtime'
import {
  ICON_OPOS_COMPRESSED_COIL,
  SOLANA_BLINKS_IMG,
  SOLANA_LOGO_HORIZONTAL,
  SOLANA_LOGO_INVERT_HORIZONTAL,
} from '@/components/utils/img.ts'
import { SOLANA_ACTIONS_WEB_LINK } from '@/constants/links.ts'

const logos = [
  {
    title: 'Solana',
    logo: asset(SOLANA_LOGO_HORIZONTAL),
    logoInvert: asset(SOLANA_LOGO_INVERT_HORIZONTAL),
    href: SOLANA_ACTIONS_WEB_LINK,
  },
]

type Props = {
  state: ExtendedState
}

export default function BlinksHeroRow(
  { state }: Props,
) {
  const t = createTranslator(state.translationData)
  console.log('BlinksHeroRow', state)

  return (
    <>
      <div className='relative mx-auto max-w-7xl p-3'>
        <div className='absolute left-0 top-0 opacity-20 dark:opacity-40'>
          <img
            src={asset(ICON_OPOS_COMPRESSED_COIL)}
            alt='Background'
            className='h-56 w-56 sm:h-64 sm:w-64 md:h-96 md:w-96 lg:h-[512px] lg:w-[512px]'
          />
        </div>

        <div className='relative mx-auto grid items-center gap-8 py-24 md:grid-cols-2 md:py-48'>
          <div className='grid w-full gap-4 p-4'>
            <h2
              className={cn(
                'py-2',
                'font-bold tracking-tighter',
                'text-5xl sm:text-7xl lg:text-8xl',
                mainShardGradation,
              )}
            >
              {t('blinks.title')}
            </h2>
            <p
              className={cn(
                'max-w-96 lg:-mt-2',
                'font-medium tracking-tight',
                'text-lg sm:max-w-lg sm:text-xl lg:max-w-xl lg:text-2xl',
                lightTextColor,
              )}
            >
              {t('blinks.description')}
            </p>
            <div className='mt-4 flex flex-wrap items-center justify-start gap-4'>
              {logos.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className='hover:opacity-80'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    lightSrc={item.logo}
                    darkSrc={item.logoInvert}
                    alt={item.title}
                    className='w-20 sm:w-24 md:w-28'
                  />
                </a>
              ))}
            </div>
          </div>
          <div className='mx-auto w-full p-4'>
            <img
              src={asset(SOLANA_BLINKS_IMG)}
              alt='Solana Actions & Blinks'
              className='w-full'
            />
          </div>
        </div>
      </div>
    </>
  )
}

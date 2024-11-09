import Link from '@/components/utils/Link.tsx'
import { useTranslation } from '@/hooks/i18n/useTranslation.ts'
import { ArrowLeft, ArrowRight } from 'iconoir-react'
import { asset } from 'fresh/runtime'
import { cn } from '@/lib/utils.ts'
import {
  basicBorderColor,
  basicTextColor,
  lightTextColor,
} from '@/components/utils/tailwinds.ts'

export type PagerProps = {
  pagerData: {
    nextPage: {
      title: string
      path: string
      thumbnail?: string
      date?: string
    } | undefined
    prevPage: {
      title: string
      path: string
      thumbnail?: string
      date?: string
    } | undefined
  }
}

export default function Pager({ pagerData }: PagerProps) {
  const t = useTranslation()
  return (
    <>
      <>
        <div className='flex flex-col gap-4 sm:flex-row py-12'>
          <div className='flex-1'>
            {pagerData.prevPage && (
              <Link
                href={pagerData.prevPage.path}
                className={cn(
                  'block h-full w-full rounded-lg p-3',
                  'border hover:opacity-80',
                  basicBorderColor,
                )}
              >
                <div class='flex flex-row justify-between items-end gap-3'>
                  <p
                    className={cn(
                      'flex flex-row items-center justify-start',
                      'text-sm tracking-tight',
                      basicTextColor,
                    )}
                  >
                    <ArrowLeft className='mr-1.5 h-4 w-4' />
                    {t('common.toPrevious')}
                  </p>
                  {pagerData.prevPage.thumbnail && (
                    <img
                      src={asset(pagerData.prevPage.thumbnail)}
                      alt={pagerData.prevPage.title}
                      className='w-24 rounded-sm'
                    />
                  )}
                </div>
                <p
                  className={cn(
                    'mt-3 text-left text-xs font-light',
                    lightTextColor,
                  )}
                >
                  {pagerData.prevPage.title}
                </p>
              </Link>
            )}
          </div>
          <div className='flex-1'>
            {pagerData.nextPage && (
              <Link
                href={pagerData.nextPage.path}
                className={cn(
                  'block h-full w-full rounded-lg p-3',
                  'border hover:opacity-80',
                  basicBorderColor,
                )}
              >
                <div class='flex flex-row justify-between items-end gap-3'>
                  {pagerData.nextPage.thumbnail
                    ? (
                      <img
                        src={asset(pagerData.nextPage.thumbnail)}
                        alt={pagerData.nextPage.title}
                        className='w-24 rounded-sm'
                      />
                    )
                    : <div />}
                  <p
                    className={cn(
                      'flex flex-row items-center justify-end',
                      'text-sm tracking-tight',
                      basicTextColor,
                    )}
                  >
                    {t('common.toNext')}
                    <ArrowRight className='ml-1.5 h-4 w-4' />
                  </p>
                </div>
                <p
                  className={cn(
                    'mt-3 text-right text-xs font-light',
                    lightTextColor,
                  )}
                >
                  {pagerData.nextPage.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </>
    </>
  )
}

import type { FC } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import style from './style.module.css'

export interface AppIconProps {
  size?: 'xs' | 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string
  background?: string
  className?: string
}

const AppIcon: FC<AppIconProps> = ({
  size = 'medium',
  rounded = false,
  icon,
  background,
  className,
}) => {
  return (
    <span
      className={classNames(
        style.appIcon,
        size !== 'medium' && style[size],
        rounded && style.rounded,
        className ?? '',
      )}
      style={{
        background,
      }}
    >
      <Image
        src={icon || '/officiax-logo.png'}
        alt="OfficialX"
        width={32}
        height={32}
        className="w-full h-full object-contain"
      />
    </span>
  )
}

export default AppIcon

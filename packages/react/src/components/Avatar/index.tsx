import { ComponentProps } from 'react'
import { User } from 'phosphor-react'
import { AvatarContainer, AvatarFallBack, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

Avatar.displayName = 'Avatar'

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallBack delayMs={600}>
        <User />
      </AvatarFallBack>
    </AvatarContainer>
  )
}

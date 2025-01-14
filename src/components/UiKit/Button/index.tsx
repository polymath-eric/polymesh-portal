import { StyledButton } from './styles';
import { EButtonVariants, IButtonProps } from './types';

const Button: React.FC<IButtonProps> = ({
  variant = EButtonVariants.PRIMARY,
  marginTop,
  marginBottom,
  children,
  onClick,
  disabled,
  className,
  round,
}) => {
  return (
    <StyledButton
      variant={variant}
      marginTop={marginTop}
      marginBottom={marginBottom}
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
      round={round}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

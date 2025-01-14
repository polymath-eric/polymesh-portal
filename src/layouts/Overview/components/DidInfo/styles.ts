import styled from 'styled-components';

export const StyledWrapper = styled.div`
  grid-area: did;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 244px;
  padding: 24px;
  background: linear-gradient(252.2deg, #ff2e72 0%, #4a125e 111.15%);
  box-shadow: 0px 20px 40px ${({ theme }) => theme.colors.shadow};
  border-radius: 24px;

  & button {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const IconWrapper = styled.div<{ size?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size || '32px'};
  height: ${({ size }) => size || '32px'};
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.24);

  & .id-icon,
  & .copy-icon {
    color: #ffffff;
  }
`;

export const StyledTopInfo = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 12px;

  & > .did-wrapper {
    flex-grow: 1;

    & p {
      color: rgba(255, 255, 255, 0.82);
    }
  }
`;

export const StyledVerifiedLabel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 54px;
  height: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.successBackground};
  color: ${({ theme }) => theme.colors.textSuccess};
  font-size: 12px;
`;

export const StyledDidWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const StyledBottomInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    gap: 8px;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.82);

    @media screen and (min-width: 0px) and (max-width: 767px) {
      width: 100%;
      justify-content: space-between;
    }

    @media screen and (min-width: 1024px) and (max-width: 1200px) {
      width: 100%;
      justify-content: space-between;
    }
  }

  & p {
    color: #ffffff;
  }

  & span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;
    font-weight: 500;
    color: #ffffff;
    text-transform: capitalize;
  }
`;

export const Separator = styled.div`
  width: 1px;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.12);
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

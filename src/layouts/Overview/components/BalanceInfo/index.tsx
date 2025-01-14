import { useContext, useState } from 'react';
import { useBalance } from '~/hooks/polymesh';
import { Icon } from '~/components';
import { Text, Heading, Button, SkeletonLoader } from '~/components/UiKit';
import { TransferPolyx } from './components/TransferPolyx';
import { ReceivePolyx } from './components/ReceivePolyx';
import {
  StyledWrapper,
  StyledAsset,
  StyledButtonGroup,
  StyledTotalBalance,
} from './styles';
import { formatBalance } from '~/helpers/formatters';
import { AccountContext } from '~/context/AccountContext';

export const BalanceInfo = () => {
  const { identityHasValidCdd, accountIsMultisigSigner } =
    useContext(AccountContext);
  const { balance, balanceIsLoading } = useBalance();
  const [transferModalOpen, setTransferModalOpen] = useState(false);
  const [receiveModalOpen, setReceiveModalOpen] = useState(false);

  const toggleTransferModal = () => setTransferModalOpen((prev) => !prev);
  const toggleReceiveModal = () => setReceiveModalOpen((prev) => !prev);

  return (
    <>
      <StyledWrapper>
        <div className="balance">
          <div>
            <StyledTotalBalance>
              {!balanceIsLoading && <Icon name="PolymeshSymbol" size="36px" />}
              <Heading type="h2">
                {balanceIsLoading ? (
                  <SkeletonLoader />
                ) : (
                  <>
                    {formatBalance(balance.total)}{' '}
                    <StyledAsset>POLYX</StyledAsset>
                  </>
                )}
              </Heading>
            </StyledTotalBalance>
            <Text size="large">Total balance</Text>
          </div>
          <div>
            <Heading type="h3">
              {balanceIsLoading ? (
                <SkeletonLoader />
              ) : (
                <>
                  {formatBalance(balance.free)} <StyledAsset>POLYX</StyledAsset>
                </>
              )}
            </Heading>
            <Text size="large">Unlocked</Text>
          </div>
          <div>
            <Heading type="h3">
              {balanceIsLoading ? (
                <SkeletonLoader />
              ) : (
                <>
                  {formatBalance(balance.locked)}{' '}
                  <StyledAsset>POLYX</StyledAsset>
                </>
              )}
            </Heading>
            <Text size="large">Locked</Text>
          </div>
        </div>
        <StyledButtonGroup>
          <Button
            onClick={toggleTransferModal}
            disabled={!identityHasValidCdd || accountIsMultisigSigner}
          >
            <Icon name="ArrowTopRight" />
            Send
          </Button>
          <Button
            variant="secondary"
            onClick={toggleReceiveModal}
            disabled={!identityHasValidCdd || accountIsMultisigSigner}
          >
            <Icon name="ArrowBottomLeft" />
            Receive
          </Button>
        </StyledButtonGroup>
      </StyledWrapper>
      {transferModalOpen && <TransferPolyx toggleModal={toggleTransferModal} />}
      {receiveModalOpen && <ReceivePolyx toggleModal={toggleReceiveModal} />}
    </>
  );
};

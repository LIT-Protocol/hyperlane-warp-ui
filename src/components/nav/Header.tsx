import Image from 'next/image';
import Link from 'next/link';
import { ConnectWalletButton } from '../../features/wallet/ConnectWalletButton';
import Name from '../../images/logos/app-name.svg';

export function Header() {
  return (
    <header className="w-full px-2 pb-2 pt-3 sm:px-6 lg:px-12">
      <div className="flex items-start justify-between">
        <Link href="/" className="flex items-center py-2">
          {/* <Image src={Logo} width={24} alt="" /> */}
          <Image src={Name} width={130} alt="" className="ml-2 mt-0.5 hidden sm:block" />
        </Link>
        <div className="flex flex-col items-end gap-2 md:flex-row-reverse md:items-start">
          <ConnectWalletButton />
        </div>
      </div>
    </header>
  );
}

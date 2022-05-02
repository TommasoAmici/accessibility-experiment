import { AtSymbolIcon } from "@heroicons/react/outline";
import type { Icon } from "@icons-pack/react-simple-icons";
import { Facebook, Linkedin, Telegram, Twitter, Whatsapp } from "@icons-pack/react-simple-icons";

const SharingLink = ({ baseURL, Icon, label }: { baseURL: string; Icon: Icon; label: string }) => (
  <a
    rel="nofollow noreferrer noopener"
    target="_blank"
    href={`${baseURL}${process.env.NEXT_PUBLIC_BASE_URL}`}
    className="flex w-fit items-center space-x-2 outline-none focus:ring-4 focus:ring-black focus:ring-offset-2"
    role="listitem"
  >
    <Icon height={20} role="presentation" />
    <span>{label}</span>
  </a>
);

export const SharingLinks = () => (
  <div className="my-4 flex select-none flex-col" role="list">
    <span className="sr-only">Share this page via: </span>
    <SharingLink baseURL={"https://twitter.com/share?url="} Icon={Twitter} label="Twitter" />
    <SharingLink
      baseURL={"https://www.linkedin.com/sharing/share-offsite/?url="}
      Icon={Linkedin}
      label="LinkedIn"
    />
    <SharingLink
      baseURL={"https://www.facebook.com/sharer.php?u="}
      Icon={Facebook}
      label="Facebook"
    />
    <SharingLink baseURL={"https://t.me/share/url?url="} Icon={Telegram} label="Telegram" />
    <SharingLink baseURL={"https://wa.me/?text="} Icon={Whatsapp} label="WhatsApp" />
    <SharingLink
      baseURL={`mailto:?subject=${encodeURIComponent("Web accessibility experiment")}&body=`}
      Icon={AtSymbolIcon}
      label="Email"
    />
  </div>
);

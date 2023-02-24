import React from "react";
import { Link } from "react-router-dom";
import { Hamburger, MenuContainer, MenuItem as MenuItemType, MenuItems } from "./style.component";
import _MENUITEMS from "../../mockup/menu-items";
import ConnectWalletButton from "../connect-wallet-button/Index";
import { ChainImages } from "../../constant/image";
import Image from "../../element/image/Index";
import Flexbox from "../../element/flexbox/Index";

interface MenuItemType {
    label: string
    link: string
    status?: string
}

interface LayoutProps {

}

interface LayoutStatus {
	isOpen: boolean
	dropdownActive: number
	innerHeight: number
}

const onCloseHandle = (onHandle:any, isOpen:boolean, ref:any) => {
	if(!ref.current) return
	if(!isOpen) return
	const onEscapeHandle = (e:any) => {
		if(e.key === "Escape") onHandle()
	}

	const onOutsideClickHandle = (e: { target: any; }) => {
		if(!ref.current.contains(e.target)) onHandle()
	}

	document.addEventListener("keydown", onEscapeHandle)
	document.addEventListener("mousedown", onOutsideClickHandle)
	ref.current.querySelectorAll("a").forEach((item: { addEventListener: (arg0: string, arg1: any) => void; }) => {
		item.addEventListener("click", onHandle)
	})

	return () => {
		document.removeEventListener("keydown", onEscapeHandle)
		document.removeEventListener("mousedown", onOutsideClickHandle)
		ref.current.querySelectorAll("a").forEach((item: { removeEventListener: (arg0: string, arg1: any) => void; }) => {
			item.removeEventListener("click", onHandle)
		})
	}
}

export default function Menu({ }: LayoutProps) {

	const [status, setStatus] = React.useState<LayoutStatus>({
		isOpen: false,
		dropdownActive: -1,
		innerHeight: document.body.clientHeight
	});

	const headerContainer = React.useRef(null)

	React.useEffect(() => {
		onCloseHandle(() => setStatus({...status, isOpen: false}), status.isOpen, headerContainer)
	}, [status.isOpen])

    return (
        <MenuContainer ref={headerContainer} isOpen={status.isOpen}>
            <MenuItems isOpen={status.isOpen}>
                {_MENUITEMS().map((i: MenuItemType, k: number) => (
                    <MenuItemType key={k} isOpen={status.isOpen}>
                        <Link to={i.link}>{i.label}</Link>
                    </MenuItemType>
                ))}
            </MenuItems>
            <Flexbox vAlign="center">
                <Image src={ChainImages.bsc} />
                <ConnectWalletButton />
            </Flexbox>
            <Hamburger isOpen={status.isOpen} onClick={() => setStatus({ ...status, isOpen: !status.isOpen })}><span /></Hamburger>
        </MenuContainer>
    )
}
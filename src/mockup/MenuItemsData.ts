import useStore from "../useStore";

const MenuItemsData = (): MenuType[] => {
    const { T } = useStore();
    return [
        {
            "label": T('menu.home'),
            "link": "/"
        },
        {
            "label": T('menu.howto'),
            "link": "/"
        },
        {
            "label": T('menu.faq'),
            "link": "/"
        },
        {
            "label": T('menu.play'),
            "link": "/play"
        }
    ]
}

export default MenuItemsData;

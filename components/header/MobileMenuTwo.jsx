export default function MobileMenuTwo() {
    const [showMenu, setShowMenu] = useState(false);
    const [menuNesting, setMenuNesting] = useState([]);
    const [menuItem, setMenuItem] = useState("");
    const [submenu, setSubmenu] = useState("");
    const pathname = usePathname();
  
    useEffect(() => {
      menuList.forEach((elm) => {
        elm?.links?.forEach((elm1) => {
          if (elm1.href == pathname) {
            setMenuItem(elm.title);
          } else {
            elm1?.links?.map((elm3) => {
              if (elm2.href == pathname) {
                setMenuItem(elm.title);
                setSubmenu(elm1.title);
              }
            });
          }
        });
      });
    }, []);
  return (
    <>
    <div className="mobileMenu text-dark-2">
            {menuList.map((elm, i) => {
              if (elm.title) {
                return (
                  <div key={i} className="submenuOne">
                    <div
                      className="title title0"
                      onClick={() =>
                        setMenuNesting((pre) =>
                          pre[-1] == elm.title ? [] : [elm.title],
                        )
                      }
                    >
                      <span
                        className={
                          elm.title == menuItem ? "activeMenu" : "inActiveMenu"
                        }
                      >
                        {elm.title}
                      </span>
                      <Image alt='chevron'
                      style={{fill:'fff'}}
                                width={14} height={15}
                                  src={
                                    menuNesting[-1] == elm.title
                                      ? "/images/menusicon/chevron-down.svg"
                                      : "/images/menusicon/chevron-right.svg"
                                  }
                                />
                    </div>

                    {elm.links &&
                      elm.links.map((itm, index) => (
                        <div
                          key={index}
                          className={
                            menuNesting[-1] == elm.title
                              ? "toggle active"
                              : "toggle"
                          }
                        >
                          {itm.href && (
                            <Link
                              key={i}
                              className={
                                pathname == itm.href
                                  ? "activeMenu link"
                                  : "link inActiveMenu"
                              }
                              href={itm.href}
                            >
                              {itm.label}
                            </Link>
                          )}

                          {itm.links && (
                            <div className="submenuTwo">
                              <div
                                className="title"
                                onClick={() =>
                                  setMenuNesting((pre) =>
                                    pre[0] == itm.title
                                      ? [pre[-1]]
                                      : [pre[-1], itm.title],
                                  )
                                }
                              >
                                <span
                                  className={
                                    itm.title == submenu
                                      ? "activeMenu"
                                      : "inActiveMenu"
                                  }
                                >
                                  {itm.title && itm.title}
                                </span>
                                <Image alt='chevron'
                                width={21} height={22}
                                style={{fill:'fff'}}
                                  src={
                                    menuNesting[0] == itm.title
                                      ? "/images/menusicon/dash.svg"
                                      : "/images/menusicon/plus.svg"
                                  }
                                />
                              </div>
                              <div
                                className={
                                  menuNesting[0] == itm.title
                                    ? "toggle active"
                                    : "toggle"
                                }
                              >
                                {itm.links &&
                                  itm.links.map((itm1, index3) => (
                                    <Link
                                      key={index2}
                                      className={
                                        pathname == itm1.href
                                          ? "activeMenu link"
                                          : "link inActiveMenu"
                                      }
                                      href={itm1.href}
                                    >
                                      {itm1.label}
                                    </Link>
                                  ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                );
              }
            })}
          </div>
    </>
  )
    
    
          

}

{
  links.map((item, index) => {
    if (typeof item.link === "object") {
      return (
        <SubMenu
          key={`sub${index}`}
          title={
            <span>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </span>
          }
        >
          {item.link.map((innerItem, innerIndex) => {
            return (
              <Menu.Item key={`${index + 1}.${innerIndex + 1}`}>
                <Link to={innerItem.link}>{innerItem.name}</Link>
              </Menu.Item>
            );
          })}
        </SubMenu>
      );
    }

    return (
      <Menu.Item
        key={index + 1}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Icon type={item.icon} />
        <Link to={item.link}>{item.name}</Link>
      </Menu.Item>
    );
  });
}

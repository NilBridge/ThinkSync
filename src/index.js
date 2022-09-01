


//注册指令
mc.listen("onServerStarted", () => {
    let cmd = mc.newCommand("tsync", "thinksync Command", PermType.GameMasters);
    cmd.setAlias("tsc");
  
    cmd.setEnum("ListAction", ["info","help",'gui']);
    cmd.setEnum("ViewAction", ["view"]);
    cmd.setEnum('DelAction',['delete']);

    cmd.mandatory("name", ParamType.String);
  
    //注册指令
    cmd.overload(["ListAction"]);
    cmd.overload("ViewAction",[])

    //回调函数
    cmd.setCallback((_cmd, _ori, out, res) => {
      switch (res.action) {
        case "info":
            break;
        case "gui":
            break;
        case "help":
          break;
        case "view":
            break;
        case 'delete':
            break;
      }
    });
    cmd.setup();
  });

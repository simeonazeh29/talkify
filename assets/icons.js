import { AntDesign, Feather } from "@expo/vector-icons";

export const icons = {
    home: (props)=> <Feather name="message-square" size={26} {...props} />,
    explore: (props)=> <Feather name="compass" size={26} {...props} />,
    create: (props)=> <AntDesign name="pluscircleo" size={26} {...props} />,
    profile: (props)=> <AntDesign name="user" size={26} {...props} />,
}
import { Relationships } from "denodb";

import SocialProfile from "@/models/SocialProfile.ts";
import Spot from "@/models/Spot.ts";
import SpotList from "@/models/SpotList.ts";
import User from "@/models/User.ts";

const models = [User, SocialProfile, SpotList, Spot];

// TODO: FK relationships attempt to create every run... fix that
Relationships.belongsTo(SocialProfile, User, { foreignKey: "user_id" });

Relationships.belongsTo(SpotList, User, { foreignKey: "user_id" });

Relationships.belongsTo(Spot, User, { foreignKey: "user_id" });

Relationships.belongsTo(Spot, SpotList, { foreignKey: "list_id" });

export default models;

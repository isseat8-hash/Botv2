module.exports = async interaction=>{


if(
interaction.customId === "ticket_category"
){


require("../systems/ticket")
(
interaction,
interaction.values[0]
);


}


};

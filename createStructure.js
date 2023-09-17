import fs from "fs";
import yaml from "js-yaml";

const json_data = {
	app: "123",
	scope: "ALL",
	desktop: {
		js: ["desktop.js"],
		css: ["desktop.css"],
	},
	mobile: {
		js: ["desktop.js"],
		css: ["desktop.css"],
	},
};

// JSONをYAMLに変換
const yaml_data = yaml.dump(json_data);

// YAMLファイルを作成
fs.writeFile("setting.yml", yaml_data, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("YAML file created successfully");
	}
});

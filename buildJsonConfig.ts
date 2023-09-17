import fs from "fs";
import yaml from "js-yaml";

interface AppData {
	app: string;
	scope: string;
	desktop: string;
	mobile: string;
}

try {
	// YAMLファイルの読み込み
	const fileContents = fs.readFileSync("./setting.yml", "utf8");

	// YAMLをJavaScriptオブジェクトに変換
	const data: AppData[] = yaml.load(fileContents) as AppData[];

	// 各アプリケーションに対してJSONファイルを作成
	data.forEach((appData: AppData) => {
		console.log(
			"🚀 ~ file: buildJsonConfig.js:13 ~ data.forEach ~ appData:",
			appData
		);
		const app = appData.app;
		const jsonData = {
			app: appData.app,
			scope: appData.scope,
			desktop: appData.desktop,
			mobile: appData.mobile,
		};

		// JSONファイルの作成
		fs.writeFileSync(`${app}.json`, JSON.stringify(jsonData, null, 2), "utf8");
	});
} catch (e) {
	console.log(e);
}

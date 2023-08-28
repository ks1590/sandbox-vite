import inquirer from "inquirer";

// const inquirer = require("inquirer");

const main = async () => {
	// 第一の質問
	const envAnswer = await inquirer.prompt([
		{
			type: "list",
			name: "environment",
			message: "カスタマイズファイルを適用する環境を選択してください。",
			choices: ["開発環境", "本番環境"],
		},
	]);

	console.log(`選択された環境: ${envAnswer.environment}`);

	// 第二の質問
	const targetApp = await inquirer.prompt([
		{
			type: "list",
			name: "app",
			message: "カスタマイズファイルを適用するアプリを選択してください。",
			choices: ["ALL", "アプリA", "アプリB", "アプリC"],
		},
	]);

	const appNameAnswer = await inquirer.prompt([
		{
			type: "confirm",
			name: "isCorrect",
			message: `${envAnswer.environment} : ${targetApp.app} にカスタマイズを適用します。よろしいですか？`,
			default: true,
		},
	]);

	if (appNameAnswer.isCorrect) {
		console.log("アップロード完了しました。");
	} else {
		console.log("アップロードをキャンセルしました。");
	}
};

main();

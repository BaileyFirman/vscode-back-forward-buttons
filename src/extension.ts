import * as vscode from 'vscode';
import { StatusBarItem, StatusBarAlignment } from 'vscode';

interface IStatusBarItemAlignment {
	position: StatusBarAlignment;
	offset: number;
}

enum IArrowIcon {
	Up = "$(arrow-up)",
	Down = "$(arrow-down)",
	Left = "$(arrow-left)",
	Right = "$(arrow-right)"
}

export const activate = () => {

	const backButtonAlignment: IStatusBarItemAlignment = {
		position: StatusBarAlignment.Left,
		offset: 1000
	};

	const forwardButtonAlignment: IStatusBarItemAlignment = {
		position: StatusBarAlignment.Left,
		offset: 999
	};

	const backButton: StatusBarItem = buildButton(backButtonAlignment, IArrowIcon.Left, "workbench.action.navigateBack");
	const forwardButton: StatusBarItem = buildButton(forwardButtonAlignment, IArrowIcon.Right, "workbench.action.navigateForward");

	backButton.show();
	forwardButton.show();
}

const buildButton = (alignment: IStatusBarItemAlignment, iconName: string, command: string) => {
	const button: StatusBarItem = vscode.window.createStatusBarItem(alignment.position, alignment.offset);
	button.text = iconName;
	button.command = command;
	return button;
}
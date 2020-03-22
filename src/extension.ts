import * as vscode from 'vscode';
import { StatusBarItem } from 'vscode';

export function activate() {
	const backButton: StatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 99999);
    backButton.text = `$(arrow-left)`;
    backButton.command = "workbench.action.navigateBack";        
    backButton.show();

    const forwardButton: StatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 99998);
    forwardButton.text = `$(arrow-right)`;  
    forwardButton.command = "workbench.action.navigateForward";  
	forwardButton.show();
}
import * as vscode from 'vscode';
import { StatusBarItem, StatusBarAlignment } from 'vscode';

interface IStatusBarItemAlignment {
    position: StatusBarAlignment;
    offset: number;
};

enum IArrowIcon {
    Up = "$(arrow-up)",
    Down = "$(arrow-down)",
    Left = "$(arrow-left)",
    Right = "$(arrow-right)"
};

export const activate = () => {
    const position: StatusBarAlignment = StatusBarAlignment.Left;

    const backButtonAlignment: IStatusBarItemAlignment = {
        position,
        offset: 100000
    };

    const forwardButtonAlignment: IStatusBarItemAlignment = {
        position,
        offset: 99999
    };

    const backButtonText: string = "Back: Alt+LeftArrow";
    const forwardButtonText: string = "Forward: Alt+RightArrow";

    const backButton: StatusBarItem = buildButton(
        backButtonAlignment,
        IArrowIcon.Left,
        "workbench.action.navigateBack",
        backButtonText
    );

    const forwardButton: StatusBarItem = buildButton(
        forwardButtonAlignment,
        IArrowIcon.Right,
        "workbench.action.navigateForward",
        forwardButtonText
    );

    backButton.show();
    forwardButton.show();
}

const buildButton = (alignment: IStatusBarItemAlignment, iconName: string, command: string, tooltip: string) => {
    const button: StatusBarItem = vscode.window.createStatusBarItem(alignment.position, alignment.offset);
    button.text = iconName;
    button.command = command;
    button.tooltip = tooltip;
    return button;
}
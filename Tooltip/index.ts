import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { Tooltip, ITooltipProps } from "./Tooltip";
import * as React from "react";

export class CustomTooltips
  implements ComponentFramework.ReactControl<IInputs, IOutputs>
{
  private notifyOutputChanged: () => void;

  constructor() {
    // Empty
  }

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
  ): void {
    this.notifyOutputChanged = notifyOutputChanged;
  }

  public updateView(
    context: ComponentFramework.Context<IInputs>
  ): React.ReactElement {
    const props: ITooltipProps = {
      content: context.parameters.tooltipValue.raw ?? "",
      header: context.parameters.tooltipHeader.raw ?? "",
      buttonValue: context.parameters.buttonValue.raw ?? "",
    };
    return React.createElement(Tooltip, props);
  }

  public getOutputs(): IOutputs {
    return {};
  }

  public destroy(): void {
    // Add code to cleanup control if necessary
  }
}

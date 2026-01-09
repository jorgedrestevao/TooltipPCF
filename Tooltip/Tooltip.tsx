import * as React from 'react';
import { Button, Tooltip as FluentTooltip } from "@fluentui/react-components";
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

export interface ITooltipProps {
  content?: string;
  header?: string;
  buttonValue?: string;
}

export const Tooltip: React.FC<ITooltipProps> = ({ content="", header="", buttonValue="" }) => {
  
  const canvasTheme = {
  ...webLightTheme,
  colorNeutralBackground1: "transparent",
  colorNeutralBackground2: "transparent",
  shadow16: "none",
  shadow64: "none",
};
  
  const lines = (content ?? "").split(",").map((s) => s.trim()).filter(Boolean);

  const contentNode = (
    <div>
      {header.trim() && (
        <>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>{header}</div>
          <hr style={{ border: 0, borderTop: "1px solid rgba(255, 255, 255, 0.12)", margin: "6px 0" }} />
        </>
      )}
      {lines.length > 0
        ? lines.map((line, idx) => (
            <div key={idx} style={{ whiteSpace: "pre-wrap" }}>
              {line}
            </div>
          ))
        : <div />}
    </div>
  );

  console.log(lines)

  return (
  <FluentProvider theme={canvasTheme} style={{ backgroundColor: 'transparent' }}>  
  <FluentTooltip appearance="inverted" withArrow content={<div style={{ background: "transparent", boxShadow: "none" }}>
      {contentNode}
    </div>} relationship="label">
    <Button
          appearance="transparent"
          size="small"
          aria-label={header?.trim() ? header : "Show tooltip"}
          style={{ minWidth: 0, padding: 10 }}>{buttonValue} </Button>
  </FluentTooltip>
  </FluentProvider>
);
}

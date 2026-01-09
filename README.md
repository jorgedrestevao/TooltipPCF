# Custom Tooltip PCF Component

![Tooltip Preview](./Tooltip.png)

A customizable Power Apps Component Framework (PCF) control that provides a rich, multi-line tooltip triggered by a button. Built with **React** and **Fluent UI 9**.



## Features

- **Multi-line Content**: Support for multiple lines of text in the tooltip (comma-separated input).
- **Optional Header**: Include a bold header at the top of the tooltip.
- **Customizable Button**: Set the text or icon for the trigger button.
- **Modern UI**: Uses Fluent UI 9 for a premium, consistent look and feel inside Power Apps.
- **Responsive Design**: Adapts content formatting automatically.

## Properties

The component accepts the following input properties:

| Name | Display Name | Description | Type |
| :--- | :--- | :--- | :--- |
| `tooltipValue` | Tooltip Value | The main content of the tooltip. Use commas to separate lines. | SingleLine.Text |
| `tooltipHeader` | Tooltip Header | An optional bold header for the tooltip. | SingleLine.Text |
| `buttonValue` | Button Value | The text displayed on the trigger button. | SingleLine.Text |

## Installation & Development

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- [Power Platform CLI](https://aka.ms/PowerPlatformCLI)

### Build and Run

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build the component**:
   ```bash
   npm run build
   ```

3. **Start the debug harness**:
   ```bash
   npm start
   ```

## Development Workflow

- `npm run start`: Launches the local debug tool.
- `npm run refreshTypes`: Generates updated types based on `ControlManifest.Input.xml`.
- `npm run lint:fix`: Automatically fixes linting issues.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

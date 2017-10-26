# Twilio Runtime CLI

Command line tools for developing Twilio Runtime applications. For available
commands, usage instructions, and examples, run `twlo help` or 
`twlo <command> --help`.

## Global Install

Install the `twlo` command globally with [`npm`](http://www.npmjs.com):

```
npm install -g twilio-runtime
```

## Getting Started

Create a new Twilio Runtime project with:

```
twlo init my_project
```

Follow the interactive prompts to set up a new project. Change into the newly
created directory and run the application with:

```
twlo serve
```

This will open a local development server on `http://localhost:3000` - Functions
created in the `functions` directory will be available at
`http://localhost:3000/your_function_file_name`. Any assets in the `assets`
directory will be available at `http://localhost:3000/your_file.css`. Assets
will be loaded before Functions will, so watch your naming!

## Deployment

Currently, there is no automatic deployment for Runtime components. We hope to
offer that this year, but for now this tool provides a convenient local test
harness for Functions and Assets that can be copy/pasted into the 
[Runtime Console](https://www.twilio.com/console/runtime/overview).

## License

MIT
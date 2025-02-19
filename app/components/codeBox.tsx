interface Props{
  data: Record<string, any>
}

export default function CodeBox({ data }: Props) {
  const jsonData = data;  
    return (
      <pre className="bg-neutral-950 text-sky-300 p-4 rounded-lg w-full overflow-x-auto text-lg leading-relaxed">
        <code className="whitespace-pre">{JSON.stringify(jsonData, null, 2)}</code>
      </pre>
    );
  }
  
import { useEditor } from "@tldraw/tldraw";
import { CogIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function GenerateButton() {
  const [isLoading, isSetLoading] = useState(false);
  const editor = useEditor();

  async function handleGenerateHTML() {
    try {
      isSetLoading(true);

      const svg = await editor.getSvg(Array.from(editor.currentPageShapeIds))

      toast.success("Sucess")
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      isSetLoading(false);
    }
  }
  return (
    <button
      onClick={handleGenerateHTML}
      className="bg-blue-500 text-white
    font-semibold rounded-lg text-lg z-[1000] absolute
    top-4 left-1/2 -translate-x-1/2 py-2 px-4 shadow-md shadow-blue-800/2
    hover:bg-blue-600"
    >
      {isLoading ? (
        <span className="inline-flex items-center justify-center">
          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
        </span>
      ) : (
        <span className="inline-flex items-center justify-center">
          <CogIcon className="w-4 h-4 mr-1" />
          <span>Generate</span>
        </span>
      )}
    </button>
  );
}
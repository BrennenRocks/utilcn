import { useOpenAiGlobal } from '@/registry/default/chatgpt-app/use-openai-global';

export const useMaxHeight = (): number | null => {
  return useOpenAiGlobal('maxHeight');
};

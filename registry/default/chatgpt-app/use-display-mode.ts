import type { DisplayMode } from '@/registry/default/chatgpt-app/chatgpt-types';
import { useOpenAiGlobal } from '@/registry/default/chatgpt-app/use-openai-global';

export const useDisplayMode = (): DisplayMode | null => {
  return useOpenAiGlobal('displayMode');
};

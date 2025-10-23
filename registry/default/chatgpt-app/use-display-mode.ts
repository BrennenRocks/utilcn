import type { DisplayMode } from './chatgpt-types';
import { useOpenAiGlobal } from './use-openai-global';

export const useDisplayMode = (): DisplayMode | null => {
  return useOpenAiGlobal('displayMode');
};

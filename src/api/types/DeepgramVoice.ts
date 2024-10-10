/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface DeepgramVoice {
    /**
     * This determines whether fillers are injected into the model output before inputting it into the voice provider.
     *
     * Default `false` because you can achieve better results with prompting the model.
     */
    fillerInjectionEnabled?: boolean;
    /** This is the voice provider that will be used. */
    provider: "deepgram";
    /** This is the provider-specific ID that will be used. */
    voiceId: Vapi.DeepgramVoiceId;
    /** This is the plan for chunking the model output before it is sent to the voice provider. */
    chunkPlan?: Vapi.ChunkPlan;
}

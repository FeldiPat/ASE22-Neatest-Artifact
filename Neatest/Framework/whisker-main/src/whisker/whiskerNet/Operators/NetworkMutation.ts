import {Mutation} from "../../search/Mutation";
import {NetworkChromosome} from "../Networks/NetworkChromosome";

export interface NetworkMutation<C extends NetworkChromosome> extends Mutation<NetworkChromosome>{

    /**
     * Applies mutation to the specified chromosome and returns the resulting offspring.
     * @param chromosome the parent chromosome to modify by mutation
     * @returns the offspring fromed by mutating the parent
     */
    apply(chromosome: C): C;

}
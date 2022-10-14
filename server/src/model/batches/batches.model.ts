import { Batch } from '../../interfaces/batch';
import { AppDataSource } from '../../store/data-source';

import { Batch as repoBatch } from '../../repo/Batch';

const batchRepository = AppDataSource.getRepository(repoBatch);

async function getBatches(): Promise<Batch[]> {
    // return dummyBatches;
    const repoBatches: repoBatch[] = await batchRepository.find({});

    const batches: Batch[] = repoBatches.map(batch => {
        return {
            batchCode: batch.batchCode,
            amountProducts: batch.amountProducts,
            batchDateStart: batch.batchDateStart,
            batchDateEnd: batch.batchDateEnd
        }
    });

    return batches;
}

async function getBatch(code: string): Promise<Batch | null> {
    // const batch: Batch | undefined = dummyBatches.find(batch => batch.batchCode === code);

    const batch: repoBatch | null = await batchRepository.findOne({
        where: {
            batchCode: code
        }
    });

    if (!batch) return null;

    return {
        batchCode: batch.batchCode,
        amountProducts: batch.amountProducts,
        batchDateStart: batch.batchDateStart,
        batchDateEnd: batch.batchDateEnd
    }
}

async function addBatch(batch: Batch): Promise<Batch> {
    /* const newBatch: Batch = {
        ...batch
    }
    dummyBatches.push(newBatch);
    return newBatch; */

    const newBatch = new repoBatch();
    newBatch.batchCode = batch.batchCode;
    newBatch.amountProducts = batch.amountProducts;
    newBatch.batchDateStart = batch.batchDateStart;
    newBatch.batchDateEnd = batch.batchDateEnd;
    await batchRepository.save(newBatch);

    return {
        ...batch
    }
}

async function deleteBatch(code: string): Promise<Batch | null> {
    //TODO: verificar si lo puedo hacer encontrando el objeto directamente con get y luego eliminarlo
    /* const memoryBatch: number = dummyBatches.findIndex(batch => batch.batchCode === code);
    const deletedBatch = dummyBatches.splice(memoryBatch, 1);
    return deletedBatch[0]; */

    const batchToRemove: repoBatch | null = await batchRepository.findOneBy({
        batchCode: code
    });

    if (!batchToRemove) return null;

    await batchRepository.remove(batchToRemove);

    return {
        batchCode: batchToRemove.batchCode,
        amountProducts: batchToRemove.amountProducts,
        batchDateStart: batchToRemove.batchDateStart,
        batchDateEnd: batchToRemove.batchDateEnd
    }
}

async function updateBatch(batch: Batch,): Promise<Batch | null> {
    //validar que exista el batch que solicitan actualizar
    /*   if (!getBatch(batch.batchCode, batches)) {
         return undefined;
     } */
    //encontrar el indice del batch
    // let batchIndex: number = dummyBatches.findIndex(memoryBatch => memoryBatch.batchCode === batch.batchCode);
    //actualizar el batch
    // dummyBatches[batchIndex] = {
    //     ...dummyBatches[batchIndex],
    //     batchDateStart: batch.batchDateStart,
    //     batchDateEnd: batch.batchDateEnd,
    // }

    // return dummyBatches[batchIndex];

    const batchToUpdate: repoBatch | null = await batchRepository.findOneBy({
        batchCode: batch.batchCode
    });

    if (!batchToUpdate) return null;

    await batchRepository.update(
        {
            batchCode: batch.batchCode
        },
        {
            amountProducts: batch.amountProducts,
            batchDateStart: batch.batchDateStart,
            batchDateEnd: batch.batchDateEnd
        }
    );

    return {
        ...batch
    }
}

export {
    getBatch,
    getBatches,
    addBatch,
    deleteBatch,
    updateBatch
}
import { Request, Response } from 'express';
import triageFlowData from '../data/triageFlowData.js';
import protocolSeedData from '../data/protocolSeedData.js';

export const getTriageSystem = (req: Request, res: Response) => {
  try {
    res.status(200).json(triageFlowData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching triage system data", error });
  }
};

export const getTriageVersion = (req: Request, res: Response) => {
  try {
    res.status(200).json({ version: triageFlowData.version });
  } catch (error) {
    res.status(500).json({ message: "Error fetching triage version", error });
  }
};

export const getProtocols = (req: Request, res: Response) => {
  try {
    res.status(200).json(protocolSeedData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching protocols", error });
  }
};

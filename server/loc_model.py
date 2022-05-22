import tensorflow as tf
import tensorflow_hub as hub
import tensorflow_text as text 
from official.nlp import optimization  # to create AdamW optimizer
import tensorflow.keras.backend as K
import os; os.environ['TF_CPP_MIN_LOG_LEVEL'] = '1' 
class Model:

    def __init__(self):
        
      

        #   MODEL HYPERPARAMETERS
        self.epochs = 1
        #   TODO: FIX THIS LINE
        self.steps_per_epoch = 5599
        self.num_train_steps = self.steps_per_epoch * self.epochs
        self.num_warmup_steps = int(0.1*self.num_train_steps)
        
        self.model_path='/mnt/a/Final Year Project/Model/2_model'
        
        #   INITIAL LEARNING RATE
        self.init_lr = 3e-5

    #   LOSS FUNCTION 
    def tilted_loss(self,y,f):
        q = 0.5
        e = (y-f)
        return K.mean(K.maximum(q*e, (q-1)*e), axis=-1)

    #   ADAM OPTIMIZER 
    def getOpt(self):
        
        return optimization.create_optimizer(init_lr=self.init_lr,
                                            num_train_steps=self.num_train_steps,
                                            num_warmup_steps=self.num_warmup_steps,
                                             optimizer_type='adamw')

    #   LOAD AND RETURN MODEL
    def getModel(self):
        model=tf.keras.models.load_model(
            self.model_path,
            custom_objects={'AdamWeightDecay':self.getOpt(),'tilted_loss':self.tilted_loss}
            )
        return model
